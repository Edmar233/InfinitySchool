import pygame # type: ignore

# Configurações
LARGURA, ALTURA = 600, 600
LINHAS, COLUNAS = 8, 8
TAMANHO_CASA = LARGURA // COLUNAS

# Cores
BRANCO = (245, 245, 245)
PRETO = (0, 0, 0)
CINZA = (128, 128, 128)
VERMELHO = (200, 0, 0)

# Inicializa pygame
pygame.init()
tela = pygame.display.set_mode((LARGURA, ALTURA))
pygame.display.set_caption("Jogo de Damas")


class Peca:
    def __init__(self, linha, coluna, cor):
        self.linha = linha
        self.coluna = coluna
        self.cor = cor

    def desenhar(self, tela):
        raio = TAMANHO_CASA // 2 - 10
        x = self.coluna * TAMANHO_CASA + TAMANHO_CASA // 2
        y = self.linha * TAMANHO_CASA + TAMANHO_CASA // 2
        pygame.draw.circle(tela, self.cor, (x, y), raio)


def desenhar_tabuleiro(tela):
    tela.fill(BRANCO)
    for linha in range(LINHAS):
        for coluna in range(linha % 2, COLUNAS, 2):
            pygame.draw.rect(tela, CINZA,
                             (coluna * TAMANHO_CASA, linha * TAMANHO_CASA,
                              TAMANHO_CASA, TAMANHO_CASA))


def criar_pecas():
    pecas = []
    for linha in range(3):
        for coluna in range(LINHAS):
            if (linha + coluna) % 2 != 0:
                pecas.append(Peca(linha, coluna, PRETO))

    for linha in range(5, 8):
        for coluna in range(LINHAS):
            if (linha + coluna) % 2 != 0:
                pecas.append(Peca(linha, coluna, VERMELHO))
    return pecas


def main():
    pecas = criar_pecas()
    rodando = True

    while rodando:
        desenhar_tabuleiro(tela)
        for peca in pecas:
            peca.desenhar(tela)

        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                rodando = False

        pygame.display.flip()

    pygame.quit()


if __name__ == "__main__":
    main()
