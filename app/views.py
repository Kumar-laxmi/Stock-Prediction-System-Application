from django.shortcuts import render
from django.http import HttpResponse

from plotly.offline import plot
import plotly.graph_objects as go
import plotly.express as px
from plotly.graph_objs import Scatter

import pandas as pd

import yfinance as yf

from .models import Project

# Create your views here.
# def index(request):
#    return render(request, 'index.html', {})

def index(request):
    df = yf.download(tickers='AAPL', period='1d', interval='1m')

    fig = go.Figure()
    fig.add_trace(go.Candlestick(x=df.index,
                open=df['Open'],
                high=df['High'],
                low=df['Low'],
                close=df['Close'], name = 'market data'))
    fig.update_layout(
                        title='Uber live share price evolution',
                        yaxis_title='Stock Price (USD per Shares)')
    fig.update_xaxes(
    rangeslider_visible=True,
    rangeselector=dict(
        buttons=list([
            dict(count=15, label="15m", step="minute", stepmode="backward"),
            dict(count=45, label="45m", step="minute", stepmode="backward"),
            dict(count=1, label="HTD", step="hour", stepmode="todate"),
            dict(count=3, label="3h", step="hour", stepmode="backward"),
            dict(step="all")
        ])
        )
    )

    plot_div = plot(fig, auto_open=False, output_type='div')

    ticker_value = request.POST.get('SearchTicket')

    return render(request, "index.html", context={'plot_div': plot_div, 'ticker_value':ticker_value})
