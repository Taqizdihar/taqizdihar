import React, { createContext, useContext, useState, ReactNode } from "react";

interface MediaModalContextType {
  openModal: (mediaUrl: string) => void;
  closeModal: () => void;
  mediaUrl: string | null;
  isOpen: boolean;
}

const MediaModalContext = createContext<MediaModalContextType | undefined>(undefined);

export function MediaModalProvider({ children }: { children: ReactNode }) {
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (url: string) => {
    setMediaUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setMediaUrl(null), 300); // clear after transition
  };

  return (
    <MediaModalContext.Provider value={{ openModal, closeModal, mediaUrl, isOpen }}>
      {children}
    </MediaModalContext.Provider>
  );
}

export function useMediaModal() {
  const context = useContext(MediaModalContext);
  if (context === undefined) {
    throw new Error("useMediaModal must be used within a MediaModalProvider");
  }
  return context;
}
