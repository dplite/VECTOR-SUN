from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import networkx as nx

# Initialize FastAPI app
app = FastAPI()

# Enable CORS for all origins (adjust as needed for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# Pydantic Models
# -------------------------------

class NodeModel(BaseModel):
    id: str
    type: str
    data: Dict

class EdgeModel(BaseModel):
    id: str
    source: str
    target: str

class PipelineModel(BaseModel):
    nodes: List[NodeModel]
    edges: List[EdgeModel]

# -------------------------------
# Endpoint
# -------------------------------

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: PipelineModel):
    """
    Parse a pipeline and return:
    - Total number of nodes
    - Total number of edges
    - Whether the graph is a DAG
    """
    # Initialize directed graph
    graph = nx.DiGraph()

    # Add nodes and edges
    for node in pipeline.nodes:
        graph.add_node(node.id)

    for edge in pipeline.edges:
        graph.add_edge(edge.source, edge.target)

    # Check for Directed Acyclic Graph (DAG)
    is_dag = nx.is_directed_acyclic_graph(graph)

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag
    }



    // used gpt for python.
