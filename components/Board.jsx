import React, { useEffect, useRef, useState } from "react";
import { Chess } from "chess.js";
import { Chessground } from "chessground";
import "chessground/assets/chessground.base.css";

// Minimal styles to size the board nicely
const BoardShell = ({ children }) => (
  <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6">
    <div className="w-full max-w-3xl">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-semibold">Chessground Demo</h1>
        <p className="text-sm text-gray-600">
          Functions available: <code>playMoveHuman(from, to, promo?)</code>,{" "}
          <code>playMoveEngine()</code>
        </p>
      </div>
      {children}
    </div>
  </div>
);

export default function App() {
  const boardRef = useRef(null);
  const cgRef = useRef(null);
  const [game] = useState(() => new Chess());
  const [fen, setFen] = useState(game.fen());
  const [lastMove, setLastMove] = useState(null);
  const [turnColor, setTurnColor] = useState("white");

  // Create Chessground instance once
  useEffect(() => {
    if (!boardRef.current) return;

    // Helper: handle a user drag-drop move from Chessground
    const onMove = (from, to) => {
      // if a pawn promotion is detected, ask the user (simple prompt)
      const needsPromo = shouldPromote(game, from, to);
      let promotion = "q";
      if (needsPromo) {
        promotion = (
          window.prompt("Promote to (q,r,b,n)?", "q") || "q"
        ).toLowerCase();
        if (!"qrbn".includes(promotion)) promotion = "q";
      }
      const res = safeTryMove(game, { from, to, promotion });
      if (!res) return; // illegal
      afterAnyMove(from, to);
    };

    cgRef.current = Chessground(boardRef.current, {
      fen,
      orientation: "white",
      turnColor,
      movable: {
        free: false,
        color: () => (turnColor === "white" ? "white" : "black"),
        dests: calcDests(game),
        events: { after: onMove },
      },
      animation: { duration: 200 },
      highlight: { lastMove: true, check: true },
      draggable: { showGhost: true },
    });

    return () => {
      if (cgRef.current) {
        try {
          cgRef.current.destroy();
        } catch {}
        cgRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep Chessground in sync when fen/turn change
  useEffect(() => {
    if (!cgRef.current) return;
    cgRef.current.set({
      fen,
      turnColor,
      lastMove: lastMove || undefined,
      movable: { dests: calcDests(game) },
      check: game.inCheck(),
    });
  }, [fen, turnColor, lastMove, game]);

  // --- Exposed helper functions ---
  // Play a human move programmatically (e.g., from console or buttons)
  function playMoveHuman(from, to, promotion = "q") {
    const res = safeTryMove(game, { from, to, promotion });
    if (!res) return false;
    afterAnyMove(from, to);
    return true;
  }

  // Stub: engine move (intentionally empty per request)
  function playMoveEngine() {
    // TODO: plug your engine/AI here and call playMoveHuman(from, to, promo?) when ready
    console.log(
      "playMoveEngine() called — implement your AI and play a move using playMoveHuman()."
    );
  }

  // Make them available globally for quick testing
  useEffect(() => {
    window.playMoveHuman = playMoveHuman;
    window.playMoveEngine = playMoveEngine;
  });

  // Common post-move updates
  function afterAnyMove(from, to) {
    setFen(game.fen());
    setLastMove([from, to]);
    setTurnColor(game.turn() === "w" ? "white" : "black");
  }

  // UI helpers
  const reset = () => {
    game.reset();
    setFen(game.fen());
    setLastMove(null);
    setTurnColor("white");
  };

  const undo = () => {
    game.undo();
    setFen(game.fen());
    setLastMove(null);
    setTurnColor(game.turn() === "w" ? "white" : "black");
  };

  return (
    <BoardShell>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <div>
              Turn:{" "}
              <span className="font-semibold capitalize">{turnColor}</span>
            </div>
            <div className="text-gray-600">Status: {renderStatus(game)}</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={reset}
              className="px-3 py-2 rounded-2xl shadow bg-white border"
            >
              Reset
            </button>
            <button
              onClick={undo}
              className="px-3 py-2 rounded-2xl shadow bg-white border"
            >
              Undo
            </button>
            <button
              onClick={() => playMoveEngine()}
              className="px-3 py-2 rounded-2xl shadow bg-white border"
            >
              Engine Move
            </button>
          </div>
        </div>
        <div className="aspect-square w-full rounded-2xl overflow-hidden shadow">
          <div ref={boardRef} className="h-full w-full" />
        </div>
        <details className="text-sm text-gray-600">
          <summary>How to call the functions</summary>
          <div className="mt-2 space-y-1">
            <div>
              <code>playMoveHuman("e2", "e4")</code> — plays e2e4 if legal.
            </div>
            <div>
              <code>playMoveEngine()</code> — stub, add your engine then call{" "}
              <code>playMoveHuman</code> from it.
            </div>
          </div>
        </details>
      </div>
    </BoardShell>
  );
}

// ----- Utilities -----
function renderStatus(chess) {
  if (chess.isGameOver()) {
    if (chess.isCheckmate()) return "Checkmate";
    if (chess.isDraw()) return "Draw";
    return "Game over";
  }
  if (chess.inCheck()) return "Check";
  return "Ongoing";
}

function safeTryMove(chess, move) {
  try {
    const res = chess.move(move);
    return !!res;
  } catch (e) {
    return false;
  }
}

function shouldPromote(chess, from, to) {
  const piece = chess.get(from);
  if (!piece || piece.type !== "p") return false;
  const toRank = to[1];
  return (
    (piece.color === "w" && toRank === "8") ||
    (piece.color === "b" && toRank === "1")
  );
}

function calcDests(chess) {
  // Build a Map of from-square -> Set(to-squares) from chess.js legal moves
  const dests = new Map();
  chess.SQUARES.forEach((sq) => {
    const ms = chess.moves({ square: sq, verbose: true });
    if (ms.length) dests.set(sq, new Set(ms.map((m) => m.to)));
  });
  return dests;
}
