from dotenv import load_dotenv
import os
import pandas as pd
#from llama_index.core.query_engine import PandasQueryEngine
from llama_index.experimental.query_engine import PandasQueryEngine
from prompts import new_prompt, instruction_str

load_dotenv()

population_path = os.path.join("data", "population.csv")
population_df = pd.read_csv(population_path)

#print(population_df.head())

# wrap around the dataset
population_query_engine = PandasQueryEngine(
    df=population_df, verbose=True, instruction_str= instruction_str)

population_query_engine.update_prompts({"pandas_prompt": new_prompt})

population_query_engine.query("what's the population of United Kingdom")