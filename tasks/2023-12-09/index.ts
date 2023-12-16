interface Tool {
  init: () => void;
  update: () => void;
  dispose: () => void;
}

interface ToolStatus {
  isInitialized: boolean;
};

export class Equipment {
  private tools = new Map<Tool, ToolStatus>();

  registerTools(tool: Tool) {
    this.tools.set(tool, { isInitialized: false });
  }

  initializeTools() {
    this.tools.forEach((toolStatus: ToolStatus, tool: Tool) => {
      tool.init();
      toolStatus.isInitialized = true;
    });
  }

  updateTools() {
    this.tools.forEach((toolStatus: ToolStatus, tool: Tool) => {
      if (!toolStatus.isInitialized) {
        throw new Error('Cannot update any tools before initialization.');
      }
      tool.update();
    });
  }

  disposeTools() {
    this.tools.forEach((toolStatus: ToolStatus, tool: Tool) => {
      tool.dispose();
    });
  }
}
