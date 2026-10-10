---
title: "Kaggle GPUs from Local VS Code"
date: 2024-02-10
summary: "How I use Kaggle's free compute from my local VS Code."
---

Kaggle gives you free GPUs. With a VS Code tunnel, you can use them from your own editor.

**1. Run this in a Kaggle notebook cell**

In the notebook settings, turn on *Internet* and *Persistence*.

This uses the VS Code CLI's `code tunnel`, which connects through Microsoft's relay, so no SSH or open ports are needed. The cell downloads the CLI, signs in with GitHub, and starts a tunnel named `kaggle-tunnel`.

```bash
!mkdir -p /opt/vscode-cli
!curl -sSL "https://code.visualstudio.com/sha/download?build=stable&os=cli-alpine-x64" -o /opt/vscode-cli/vscode_cli.tar.gz
!tar -xzf /opt/vscode-cli/vscode_cli.tar.gz -C /opt/vscode-cli && rm /opt/vscode-cli/vscode_cli.tar.gz
!/opt/vscode-cli/code tunnel user login --provider github
!/opt/vscode-cli/code tunnel --accept-server-license-terms --name kaggle-tunnel
```

It prints a GitHub device code. Open the link and enter the code.

**2. Connect**

- **Local VS Code:** install the *Remote - Tunnels* extension, choose "Connect to Tunnel", sign in with GitHub, and pick `kaggle-tunnel`.
- **Browser:** the cell prints a link like this, just open it: `https://vscode.dev/tunnel/kaggle-tunnel/kaggle/working`

Once connected, open the `/kaggle` folder and work there. With Persistence on, everything in it stays even after the instance shuts down.
