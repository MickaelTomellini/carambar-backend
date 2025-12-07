export class CoreController {
    render404(req, res) {
        res.status(404).json({ error: "Ressource non trouvée" });
    }

    render500(req, res) {
        res.status(500).json({ error: "Erreur serveur" });
    }
}
