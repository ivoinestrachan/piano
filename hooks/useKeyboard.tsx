import { useEffect, useState } from "react";

const useKeyboard = () => {
  const audioFiles: { [key: string]: string } = {
    KeyC: "../sounds/c.mp3",
    KeyD: "/sounds/d.mp3",
    KeyE: "/sounds/e.mp3",
    KeyF: "/sounds/f.mp3",
    KeyG: "/sounds/g.mp3",
    KeyA: "/sounds/a.mp3",
    KeyB: "/sounds/b.mp3",
    KeyHC: "/sounds/hc.mp3",
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const audioFile: string | undefined = audioFiles[event.key];
      if (audioFile) {
        const audio = new Audio(audioFile);
        audio.play();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [audioFiles]);
};

export default useKeyboard;
