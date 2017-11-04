export default {
  projects: {
    addMediaToProject({ Methods, manulRouter }, { projectId, media }) {
      Methods.projects.addMediaToProject.call({ projectId, media }, (error) => {
        if (!error) {
          manulRouter.go('project', { projectId });
        }
      });
    },

    destroyProject({ Methods, manulRouter }, projectId) {
      if (window.confirm('Bisch du ganz sicher, Sandro? 😱')) {
        Methods.projects.destroy.call({ projectId }, (error) => {
          manulRouter.go('home');
        });
      }
    },
    reorderMedia(
      { Methods, manulRouter },
      { projectId, startIndex, endIndex }
    ) {
      Methods.projects.reorderMedia.call({ projectId, startIndex, endIndex });
    },
  },
};
