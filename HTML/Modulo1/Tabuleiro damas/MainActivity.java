package com.example.damas;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(new DamasView(this)); // usa a view personalizada
    }
}

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.view.MotionEvent;
import android.view.View;

public class DamasView extends View {

    private int tamanhoCasa;
    private Paint paintTabuleiro, paintPecasPretas, paintPecasBrancas;

    public DamasView(Context context) {
        super(context);

        paintTabuleiro = new Paint();
        paintPecasPretas = new Paint();
        paintPecasBrancas = new Paint();

        paintTabuleiro.setStyle(Paint.Style.FILL);
        paintPecasPretas.setColor(Color.BLACK);
        paintPecasBrancas.setColor(Color.WHITE);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);

        int largura = getWidth();
        int altura = getHeight();
        tamanhoCasa = largura / 8;

        // Desenha o tabuleiro 8x8
        for (int linha = 0; linha < 8; linha++) {
            for (int coluna = 0; coluna < 8; coluna++) {
                if ((linha + coluna) % 2 == 0) {
                    paintTabuleiro.setColor(Color.LTGRAY);
                } else {
                    paintTabuleiro.setColor(Color.DKGRAY);
                }
                canvas.drawRect(coluna * tamanhoCasa, linha * tamanhoCasa,
                        (coluna + 1) * tamanhoCasa, (linha + 1) * tamanhoCasa,
                        paintTabuleiro);
            }
        }

        // Desenha peças iniciais (simplificado)
        for (int linha = 0; linha < 3; linha++) {
            for (int coluna = 0; coluna < 8; coluna++) {
                if ((linha + coluna) % 2 != 0) {
                    canvas.drawCircle(coluna * tamanhoCasa + tamanhoCasa / 2,
                            linha * tamanhoCasa + tamanhoCasa / 2,
                            tamanhoCasa / 2 - 10, paintPecasPretas);
                }
            }
        }

        for (int linha = 5; linha < 8; linha++) {
            for (int coluna = 0; coluna < 8; coluna++) {
                if ((linha + coluna) % 2 != 0) {
                    canvas.drawCircle(coluna * tamanhoCasa + tamanhoCasa / 2,
                            linha * tamanhoCasa + tamanhoCasa / 2,
                            tamanhoCasa / 2 - 10, paintPecasBrancas);
                }
            }
        }
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        // Aqui você pode capturar o toque para movimentar as peças
        if (event.getAction() == MotionEvent.ACTION_DOWN) {
            int coluna = (int) (event.getX() / tamanhoCasa);
            int linha = (int) (event.getY() / tamanhoCasa);
            System.out.println("Toque em: linha " + linha + ", coluna " + coluna);
        }
        return true;
    }
}