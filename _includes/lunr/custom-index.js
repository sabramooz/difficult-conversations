// Runs inside the lunr builder loop. Guard so we only clear once.
// Default lunr trimmer strips Persian letters (\W), breaking Farsi search.
if (!this._faPipelineReady) {
  this.pipeline.reset();
  this.searchPipeline.reset();
  this._faPipelineReady = true;
}
