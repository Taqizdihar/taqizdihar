import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  PanelRightClose,
  PanelRightOpen,
  BookOpen,
  Calendar,
  Globe2,
  Layers,
  FileText,
  Scroll,
  RectangleHorizontal,
  RectangleVertical,
  Maximize,
  Menu,
  X,
} from "lucide-react";
import { comics } from "./ComicsData";
import useDocumentTitle from "../../hooks/useDocumentTitle";

type DisplayMode = "single" | "longstrip";
type FitMode = "fitWidth" | "fitHeight" | "fitBoth";

export default function ComicReader() {
  const { id } = useParams();
  const navigate = useNavigate();
  const comic = comics.find((c) => c.id === id);

  const [currentPage, setCurrentPage] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("single");
  const [fitMode, setFitMode] = useState<FitMode>("fitBoth");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useDocumentTitle(comic ? `${comic.title} — Reader` : "Comic Reader");

  // Keyboard navigation (only for single page mode)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!comic) return;
      if (displayMode === "single") {
        if (e.key === "ArrowRight" || e.key === " ") {
          e.preventDefault();
          setCurrentPage((prev) => Math.min(prev + 1, comic.media.length - 1));
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setCurrentPage((prev) => Math.max(prev - 1, 0));
        }
      }
      if (e.key === "Escape") {
        if (mobileDrawerOpen) {
          setMobileDrawerOpen(false);
        } else {
          navigate("/hobbies/comics");
        }
      }
    },
    [comic, navigate, displayMode, mobileDrawerOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Scroll to top of reading area when page changes in single mode
  useEffect(() => {
    if (displayMode === "single" && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, displayMode]);

  if (!comic) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-[#1a1a1a] text-white">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Comic not found</h2>
          <button
            onClick={() => navigate("/hobbies/comics")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Comics
          </button>
        </div>
      </div>
    );
  }

  const totalPages = comic.media.length;
  const canPrev = currentPage > 0;
  const canNext = currentPage < totalPages - 1;

  // Status color helper
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-600 text-white";
      case "ongoing":
        return "bg-yellow-500 text-gray-900";
      case "discontinued":
        return "bg-red-600 text-white";
      default:
        return "bg-white/20 text-white";
    }
  };

  // Fit mode CSS classes for images
  const getImageFitClasses = () => {
    switch (fitMode) {
      case "fitWidth":
        return "w-full h-auto object-contain";
      case "fitHeight":
        return "h-screen w-auto object-contain mx-auto";
      case "fitBoth":
        return "w-full h-screen object-contain mx-auto";
      default:
        return "w-full h-auto object-contain";
    }
  };

  // Image error fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src =
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" fill="none"><rect width="600" height="800" fill="%231a1a1a"/><text x="50%" y="50%" text-anchor="middle" fill="%23666" font-size="20" font-family="sans-serif">Page not found</text></svg>';
  };

  // ─── Sidebar Content (shared between desktop sidebar and mobile drawer) ───
  const SidebarContent = () => (
    <div className="p-5 sm:p-6 space-y-5 sm:space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/hobbies/comics")}
        className="inline-flex items-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-sm font-medium transition-all border border-white/5"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Comics
      </button>

      {/* Comic Info Header */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-white leading-tight">
          {comic.title}
        </h2>
        <div
          className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(comic.status)}`}
        >
          {comic.status}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5 text-sm text-white/70">
          <Calendar className="w-4 h-4 text-white/40 shrink-0" />
          <span>{comic.year}</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-white/70">
          <Globe2 className="w-4 h-4 text-white/40 shrink-0" />
          <span>{comic.language}</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-white/70">
          <Layers className="w-4 h-4 text-white/40 shrink-0" />
          <span>{totalPages} Pages</span>
        </div>
      </div>

      {/* Synopsis */}
      <div className="border-t border-white/10 pt-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
          Synopsis
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">
          {comic.shortDescription}
        </p>
      </div>

      {/* ─── Page Navigation (Single Page mode only) ─── */}
      {displayMode === "single" && (
        <div className="border-t border-white/10 pt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
            Page Navigation
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => canPrev && setCurrentPage((p) => p - 1)}
              disabled={!canPrev}
              className={`p-2 rounded-lg transition-all ${
                canPrev
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-white/5 text-white/20 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex-1 text-center text-sm font-semibold text-white/80">
              Page {currentPage + 1} of {totalPages}
            </div>
            <button
              onClick={() => canNext && setCurrentPage((p) => p + 1)}
              disabled={!canNext}
              className={`p-2 rounded-lg transition-all ${
                canNext
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-white/5 text-white/20 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ─── Display Mode Toggle ─── */}
      <div className="border-t border-white/10 pt-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
          Display Mode
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setDisplayMode("single")}
            className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
              displayMode === "single"
                ? "bg-white text-black shadow-lg"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Single
          </button>
          <button
            onClick={() => setDisplayMode("longstrip")}
            className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
              displayMode === "longstrip"
                ? "bg-white text-black shadow-lg"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Scroll className="w-3.5 h-3.5" />
            Long Strip
          </button>
        </div>
      </div>

      {/* ─── Fit Mode Toggle ─── */}
      <div className="border-t border-white/10 pt-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
          Fit Mode
        </h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setFitMode("fitWidth")}
            className={`flex flex-col items-center gap-1.5 px-2 py-2.5 rounded-xl text-[10px] font-bold transition-all ${
              fitMode === "fitWidth"
                ? "bg-white text-black shadow-lg"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <RectangleHorizontal className="w-4 h-4" />
            Width
          </button>
          <button
            onClick={() => setFitMode("fitHeight")}
            className={`flex flex-col items-center gap-1.5 px-2 py-2.5 rounded-xl text-[10px] font-bold transition-all ${
              fitMode === "fitHeight"
                ? "bg-white text-black shadow-lg"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <RectangleVertical className="w-4 h-4" />
            Height
          </button>
          <button
            onClick={() => setFitMode("fitBoth")}
            className={`flex flex-col items-center gap-1.5 px-2 py-2.5 rounded-xl text-[10px] font-bold transition-all ${
              fitMode === "fitBoth"
                ? "bg-white text-black shadow-lg"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Maximize className="w-4 h-4" />
            Both
          </button>
        </div>
      </div>

      {/* Page Thumbnails */}
      <div className="border-t border-white/10 pt-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
          Pages
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {comic.media.map((page, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentPage(idx);
                if (displayMode === "longstrip") {
                  // Scroll to the target image in long strip mode
                  const el = document.getElementById(`comic-page-${idx}`);
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                idx === currentPage
                  ? "border-white shadow-lg shadow-white/10 scale-[1.03]"
                  : "border-transparent opacity-60 hover:opacity-100 hover:border-white/30"
              }`}
            >
              <img
                src={page}
                alt={`Page ${idx + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/60 text-center py-0.5 text-[10px] font-bold text-white/80">
                {idx + 1}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="border-t border-white/10 pt-4 hidden md:block">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
          Keyboard Shortcuts
        </h3>
        <div className="space-y-2 text-xs text-white/50">
          {displayMode === "single" && (
            <>
              <div className="flex items-center justify-between">
                <span>Previous page</span>
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-white/70 font-mono">
                  ←
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Next page</span>
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-white/70 font-mono">
                  →
                </kbd>
              </div>
            </>
          )}
          <div className="flex items-center justify-between">
            <span>Exit reader</span>
            <kbd className="px-2 py-0.5 rounded bg-white/10 text-white/70 font-mono">
              Esc
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-screen bg-[#1a1a1a] text-white overflow-hidden select-none">
      {/* ═══════════ Main Reading Area ═══════════ */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-[#111111] border-b border-white/5 shrink-0 z-20">
          {/* Left: Back button (desktop) / Hamburger (mobile) */}
          <div className="flex items-center gap-2">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="md:hidden inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-sm font-medium transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>
            {/* Desktop back button */}
            <button
              onClick={() => navigate("/hobbies/comics")}
              className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-sm font-medium transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>

          {/* Center: Title + Page indicator */}
          <div className="flex items-center gap-2 text-sm text-white/60 min-w-0">
            <BookOpen className="w-4 h-4 shrink-0 hidden sm:block" />
            <span className="font-semibold text-white/90 truncate max-w-[120px] sm:max-w-[200px]">
              {comic.title}
            </span>
            {displayMode === "single" && (
              <>
                <span className="text-white/30">·</span>
                <span className="text-white/50 text-xs sm:text-sm whitespace-nowrap">
                  {currentPage + 1}/{totalPages}
                </span>
              </>
            )}
          </div>

          {/* Right: Sidebar toggle (desktop only) */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-sm font-medium transition-all"
          >
            {sidebarOpen ? (
              <PanelRightClose className="w-4 h-4" />
            ) : (
              <PanelRightOpen className="w-4 h-4" />
            )}
          </button>
          {/* Mobile: empty spacer to balance the flex layout */}
          <div className="w-10 md:hidden" />
        </div>

        {/* ─── Page Display Area ─── */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden bg-[#0d0d0d] relative"
        >
          {displayMode === "single" ? (
            /* ── Single Page Mode ── */
            <div className="flex items-center justify-center min-h-full relative">
              {/* Previous Button */}
              <button
                onClick={() => canPrev && setCurrentPage((p) => p - 1)}
                disabled={!canPrev}
                className={`absolute left-2 sm:left-4 z-10 p-2 sm:p-3 rounded-full backdrop-blur-md transition-all duration-200 ${
                  canPrev
                    ? "bg-white/10 hover:bg-white/20 text-white hover:scale-110 cursor-pointer"
                    : "bg-white/5 text-white/20 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Active Page */}
              <img
                src={comic.media[currentPage]}
                alt={`${comic.title} — Page ${currentPage + 1}`}
                className={`${getImageFitClasses()} transition-opacity duration-300`}
                draggable={false}
                onError={handleImageError}
              />

              {/* Next Button */}
              <button
                onClick={() => canNext && setCurrentPage((p) => p + 1)}
                disabled={!canNext}
                className={`absolute right-2 sm:right-4 z-10 p-2 sm:p-3 rounded-full backdrop-blur-md transition-all duration-200 ${
                  canNext
                    ? "bg-white/10 hover:bg-white/20 text-white hover:scale-110 cursor-pointer"
                    : "bg-white/5 text-white/20 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          ) : (
            /* ── Long Strip Mode ── */
            <div className="flex flex-col items-center">
              {comic.media.map((page, idx) => (
                <img
                  key={idx}
                  id={`comic-page-${idx}`}
                  src={page}
                  alt={`${comic.title} — Page ${idx + 1}`}
                  className={`${getImageFitClasses()} transition-opacity duration-300`}
                  draggable={false}
                  onError={handleImageError}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom Page Indicator (Single Page mode only) */}
        {displayMode === "single" && (
          <div className="flex items-center justify-center gap-1.5 py-2 bg-[#111111] border-t border-white/5 shrink-0">
            {comic.media.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  idx === currentPage
                    ? "bg-white w-6"
                    : "bg-white/25 hover:bg-white/40 w-2"
                }`}
                title={`Page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ═══════════ Right Sidebar — Desktop ═══════════ */}
      <div
        className={`hidden md:block shrink-0 bg-[#141414] border-l border-white/5 overflow-y-auto transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-72 xl:w-80 opacity-100" : "w-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="min-w-[280px]">
          <SidebarContent />
        </div>
      </div>

      {/* ═══════════ Mobile Drawer Overlay ═══════════ */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileDrawerOpen(false)}
      />
      {/* Drawer Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[340px] bg-[#141414] border-l border-white/10 overflow-y-auto transition-transform duration-300 ease-in-out ${
          mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 bg-[#141414]/95 backdrop-blur-md border-b border-white/5">
          <span className="text-sm font-bold text-white/70 uppercase tracking-wider">
            Settings
          </span>
          <button
            onClick={() => setMobileDrawerOpen(false)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <SidebarContent />
      </div>
    </div>
  );
}
