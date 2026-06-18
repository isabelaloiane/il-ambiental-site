// pnpm hook: remove preinstall guard when running in Netlify/CI
// This prevents the 'Error during pnpm install' in Netlify's auto-install step
function readPackage(pkg) {
  if (pkg.name === 'workspace' && (process.env.NETLIFY || process.env.CI)) {
      if (pkg.scripts && pkg.scripts.preinstall) {
            delete pkg.scripts.preinstall;
                }
                  }
                    return pkg;
                    }

                    module.exports = {
                      hooks: {
                          readPackage
                            }
                            };
                            
