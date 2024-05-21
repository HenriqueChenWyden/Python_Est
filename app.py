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
app.layout = [
    html.Div(children='Steam Dataset',
             style={'textAlign': 'center', 'color': 'blue', 'fontSize': 30}),
    
    html.Div(className='row', children=[
        dash_table.DataTable(
            data=df[['name', 'price']].to_dict('records'),
            style_table={'overflowX': 'auto', 'textAlign': 'left'},
            style_cell={'textAlign': 'left', 'fontSize': '30'},
            page_size=10
        ),
    ]),
    dcc.Graph(figure=px.histogram(df, x='platforms', histfunc='count'))
]

# Run the app
if __name__ == '__main__':
    app.run(debug=True)