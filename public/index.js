const { TerraformCloud } = require('terraform-cloud');

const terraformCloud = new TerraformCloud({
  organization: 'your-organization',
  workspace: 'your-workspace',
  apiToken: 'your-api-token',
});

function onClick() {
    console.log("terraform : apply ...");
    // Appliquer les modifications
    terraformCloud.apply('auto-approve')
    .then((result) => {
        console.log('Changements appliqués avec succès:', result);
    })
    .catch((error) => {
        console.error('Erreur lors de l\'application des changements:', error);
    });
}