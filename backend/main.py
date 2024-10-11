import numpy as np
import pandas as pd
from sklearn import datasets



data1 = datasets.load_diabetes()
df = pd.DataFrame(data1.data, columns=data1.feature_names)
print(df)