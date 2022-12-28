import type { Readable } from 'svelte/store';

export { default as Splitpanes } from './Splitpanes.svelte';
export { default as Pane } from './Pane.svelte';

export type PaneInitFunction = (key: any) => {
	onSplitterDown: (_event: TouchEvent | MouseEvent) => void;
	onSplitterClick: (event: MouseEvent) => void;
	onSplitterDblClick: (_event: MouseEvent) => void;
};

// methods passed from splitpane to children panes
export interface SplitContext {
	/** Tells the key of the very first pane, or undefined if not recieved yet. */
	veryFirstPaneKey: Readable<any>;
	isHorizontal: Readable<boolean>;
	showFirstSplitter: Readable<boolean>;
	onPaneInit: PaneInitFunction;
	onPaneAdd: (pane: IPane) => Promise<void>;
	onPaneRemove: (key: any) => Promise<void>;
	onPaneClick: (_event: MouseEvent, key: any) => void;
	/** Report the manual given size was changed. */
	reportGivenSizeChange: (paneKey: unknown, newGivenSize: number | null) => void;
}

export interface IPaneSizingEvent {
	element?: HTMLElement;
	// minimum size in %
	min: number;
	// maximum size in %
	max: number;
	// pane size in %
	size: number;
	// snap size in %
	snap: number;
}

// the definition of a pane
export interface IPane {
	// unique key per pane
	key: any;
	element: HTMLElement;
	// 0....N index in pane array
	index?: number;
	min: () => number;
	max: () => number;
	snap: () => number;
	sz: () => number;
	setSz: (number: number) => void;
	setSplitterActive: (isActive: boolean) => void;
	givenSize: number | null;
	isReady: boolean;
}
