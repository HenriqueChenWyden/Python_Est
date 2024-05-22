# Import packages
from dash import Dash, html, dash_table, dcc
import pandas as pd
import plotly.express as px

# Incorporate data
df = pd.read_csv('./steam.csv')

# Initialize the app - incorporate css
external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']
app = Dash(external_stylesheets=external_stylesheets)

# App layout
app.layout = html.Div(children=[
    html.Div(children='Projeto de Estatística - Steam',
             style={'textAlign': 'center', 'color': 'blue', 'fontSize': 30}),
    
    html.Div(className='row', style={'backgroundColor': 'grey'}, children=[
        html.Div(className='six columns', children=[
            html.H4('Tabela'),
            dash_table.DataTable(
                columns=[{'name': i, 'id': i} for i in df.columns],
                data=df.to_dict('records'),
                style_table={'overflowX': 'auto', 'textAlign': 'left'},
                style_cell={'textAlign': 'left', 'fontSize': '30'},
                page_size=10
            ),
        ]),
        html.Div(className='six columns', style={'backgroundColor': 'grey'}, children=[
            dcc.Graph(figure=px.histogram(df, x='price', histfunc='avg').update_layout(
                title={
                    'text': 'Preços',
                    'y':0.99,
                    'x':0.5,
                    'xanchor': 'center',
                    'yanchor': 'top'
                },
                title_font=dict(size=24)  # Adjust the font size here
            )),
        ]),
    ]),
    html.Div(className='row',style={'backgroundColor': 'grey'}, children=[
        html.Div(className='six columns', children=[
            dcc.Graph(figure=px.pie(df, names='platforms').update_layout(
                title={
                    'text': 'Plataformas mais usadas',
                    'y':0.98,
                    'x':0.5,
                    'xanchor': 'center',
                    'yanchor': 'top'
                },
                title_font=dict(size=24)  # Adjust the font size here
            )), 
        ]),
        # Adicione aqui o seu quarto gráfico
        html.Div(className='six columns',style={'backgroundColor': 'grey'}, children=[
            dcc.Graph(figure=px.bar(df, x='genres').update_layout(
                title={
                    'text': 'Gêneros de Jogos',
                    'y':0.98,
                    'x':0.5,
                    'xanchor': 'center',
                    'yanchor': 'top'
                },
                title_font=dict(size=24)  # Adjust the font size here
            )),
        ]),
    ]),
])

# Run the app
if __name__ == '__main__':
    app.run(debug=False)