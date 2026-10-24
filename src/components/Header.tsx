import React from 'react';
import {
  RefreshCw,
  QrCode,
  Smartphone,
  Layers,
  ListTodo,
  Columns3,
  Globe,
  Plus,
  Radio,
  WifiOff,
} from 'lucide-react';
import { ViewMode, SyncStatus, DevicePresence } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  syncStatus: SyncStatus;
  pingMs: number;
  roomId: string;
  connectedDevices: DevicePresence[];
  onOpenSyncModal: () => void;
  onNewTaskClick: () => void;
  onDonationClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  syncStatus,
  pingMs,
  roomId,
  connectedDevices,
  onOpenSyncModal,
  onNewTaskClick,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#101510] text-[#F2EFE5] border-b border-[#34392F] shadow-sm">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Plain brand wordmark without square */}
          <a
            href="#explore"
            onClick={(e) => {
              e.preventDefault();
              onViewChange('webpage');
            }}
            className="flex items-center gap-3 group text-[#F2EFE5] hover:text-[#C6A56A] transition-all whitespace-nowrap shrink-0 py-1"
          >
            <div className="flex flex-col text-left">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-[0.24em] text-[#F2EFE5] group-hover:text-[#C6A56A] transition-colors leading-tight">
                BRACA
              </span>
              <span className="hidden md:inline-block text-[10px] tracking-[0.1em] uppercase text-[#A6AA9A] font-sans group-hover:text-[#F2EFE5] transition-colors leading-none mt-0.5">
                Biodiversity Research and Conservation Alliance
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-[#A6AA9A]">
            <button
              onClick={() => onViewChange('webpage')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'webpage'
                  ? 'text-[#C6A56A] font-semibold'
                  : 'hover:text-[#F2EFE5]'
              }`}
            >
              Serengeti Experience
            </button>

            <button
              onClick={() => onViewChange('board')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'board'
                  ? 'text-[#C6A56A] font-semibold'
                  : 'hover:text-[#F2EFE5]'
              }`}
            >
              Field Operations
            </button>

            <button
              onClick={() => onViewChange('list')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'list'
                  ? 'text-[#C6A56A] font-semibold'
                  : 'hover:text-[#F2EFE5]'
              }`}
            >
              Observations Register
            </button>

            <button
              onClick={() => onViewChange('timeline')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'timeline'
                  ? 'text-[#C6A56A] font-semibold'
                  : 'hover:text-[#F2EFE5]'
              }`}
            >
              Research Pillars
            </button>
          </nav>

          {/* Zone 3: 1 primary action area */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Sync trigger button */}
            <button
              onClick={onOpenSyncModal}
              title={`Sync Room: ${roomId}`}
              className="flex items-center gap-2 px-2.5 py-1.5 bg-[#141A13] hover:bg-[#1D241B] border border-[#34392F] hover:border-[#C6A56A]/60 rounded text-xs font-mono transition-colors text-[#A6AA9A]"
            >
              {syncStatus === 'connected' ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56A]" />
                  <span className="hidden sm:inline text-[#C6A56A] text-[11px]">Sync</span>
                </>
              ) : syncStatus === 'syncing' ? (
                <RefreshCw className="w-3 h-3 text-[#C6A56A] animate-spin" />
              ) : (
                <WifiOff className="w-3 h-3 text-stone-500" />
              )}
              <span className="text-[11px] font-mono text-stone-400">
                {connectedDevices.length}
              </span>
            </button>

            {/* Log Observation Task */}
            <button
              onClick={onNewTaskClick}
              className="px-3 py-1.5 bg-[#C6A56A] hover:bg-[#d8b87d] text-[#101510] text-xs font-mono font-semibold tracking-wider uppercase rounded transition-all active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Log Action</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Quick View Mode Toolbar */}
      <div className="lg:hidden border-t border-[#34392F] bg-[#141A13] px-4 py-2">
        <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-none text-xs font-mono">
          <button
            onClick={() => onViewChange('webpage')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
              currentView === 'webpage'
                ? 'bg-[#1D241B] text-[#C6A56A] border border-[#C6A56A]/60 font-semibold'
                : 'text-[#A6AA9A]'
            }`}
          >
            Wildlife Experience
          </button>
          <button
            onClick={() => onViewChange('board')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
              currentView === 'board'
                ? 'bg-[#1D241B] text-[#C6A56A] border border-[#C6A56A]/60 font-semibold'
                : 'text-[#A6AA9A]'
            }`}
          >
            Field Board
          </button>
          <button
            onClick={() => onViewChange('list')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
              currentView === 'list'
                ? 'bg-[#1D241B] text-[#C6A56A] border border-[#C6A56A]/60 font-semibold'
                : 'text-[#A6AA9A]'
            }`}
          >
            Register
          </button>
          <button
            onClick={() => onViewChange('timeline')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
              currentView === 'timeline'
                ? 'bg-[#1D241B] text-[#C6A56A] border border-[#C6A56A]/60 font-semibold'
                : 'text-[#A6AA9A]'
            }`}
          >
            Pillars
          </button>
        </div>
      </div>
    </header>
  );
};
