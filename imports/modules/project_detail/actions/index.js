export default {
  projects: {
    addMediaToProject({ Methods, manulRouter }, { projectId, media }) {
      Methods.projects.addMediaToProject.call({ projectId, media }, (error) => {
        if (!error) {
          manulRouter.go('project', { projectId });
        }
      });
    },
  },
};
