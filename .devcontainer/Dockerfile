FROM node:latest

# System packages
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    netcat-openbsd \
    wget \
    zsh \
    jq \
    vim \
    git \
    && rm -rf /var/lib/apt/lists/*

# GitHub CLI
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \
    | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" \
    | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt-get update \
    && apt-get install -y gh \
    && rm -rf /var/lib/apt/lists/*

# vimpager/vimcat
RUN git clone https://github.com/rkitover/vimpager.git /tmp/vimpager \
    && cd /tmp/vimpager \
    && make install \
    && rm -rf /tmp/vimpager

# oh-my-zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# Set zsh as default shell
RUN chsh -s $(which zsh)

# pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Claude Code CLI
RUN npm install -g @anthropic-ai/claude-code

WORKDIR /app

CMD ["zsh"]
