package com.misitio.clase;

public class Serie extends Titulo{
    int numerotemporadas;
    int episodiosTemporada;
    int duracionEpisodio;

    @Override
    public int getDuracion() {
        return numerotemporadas*episodiosTemporada*duracionEpisodio;
    }

    public int getEpisodiosTemporada() {
        return episodiosTemporada;
    }

    public void setEpisodiosTemporada(int episodiosTemporada) {
        this.episodiosTemporada = episodiosTemporada;
    }

    public int getNumerotemporadas() {
        return numerotemporadas;
    }

    public void setNumerotemporadas(int numerotemporadas) {
        this.numerotemporadas = numerotemporadas;
    }

    public int getDuracionEpisodio() {
        return duracionEpisodio;
    }

    public void setDuracionEpisodio(int duracionEpisodio) {
        this.duracionEpisodio = duracionEpisodio;
    }
}
