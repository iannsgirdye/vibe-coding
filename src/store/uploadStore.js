import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useUploadStore = defineStore('upload', {
  state: () => ({
    batchId: null,
    isProcessing: false,
    isTargetFormEnabled: false,
    uploadedFiles: [],
  }),
  
  actions: {
    generateBatchId() {
      this.batchId = uuidv4();
    },
    
    setProcessingStatus(status) {
      this.isProcessing = status;
    },
    
    setTargetFormEnabled(enabled) {
      this.isTargetFormEnabled = enabled;
    },
    
    setUploadedFiles(files) {
      this.uploadedFiles = files;
    },
    
    resetState() {
      this.batchId = null;
      this.isProcessing = false;
      this.isTargetFormEnabled = false;
      this.uploadedFiles = [];
    }
  }
}); 