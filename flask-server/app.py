from flask import Flask,request
import math
import pickle
import numpy as np 
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
breast_cancer_model = pickle.load(open('modelp.pkl','rb'))
# breast_cancer_model = pickle.load(open('bc2.pkl','rb'))
pcos_model = pickle.load(open('pcos_model.pkl','rb'))

@app.route('/')
@app.route('/api/greeting')
def get_greetings():
    
    obj = {}
    obj['greeting'] = 'Hello World'
    
    return obj

@app.route('/post_json', methods=['POST'])
def process_json():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.get_json()
        return json
        print(json)
    else:
        return 'Content-Type not supported!'

@app.route('/api/breastcancer', methods=['POST'])
@cross_origin()
def detect_breast_cancer():
    obj = {}
    content=request.get_json()
    values=content.get('Values')
    if values is None:
        return {"error":"Values key not found"}
    maligant_mean = [1.74628302e+01, 2.16049057e+01, 1.15365377e+02, 9.78376415e+02,
                     1.02898491e-01, 1.45187783e-01, 1.60774717e-01, 8.79900000e-02,
                     1.92908962e-01, 6.26800943e-02, 6.09082547e-01, 1.21091462e+00,
                     4.32392925e+00, 7.26724057e+01, 6.78009434e-03, 3.22811651e-02,
                     4.18240094e-02, 1.50604717e-02, 2.04724009e-02, 4.06240566e-03,
                     2.11348113e+01, 2.93182075e+01, 1.41370330e+02, 1.42228632e+03,
                     1.44845236e-01, 3.74824104e-01, 4.50605566e-01, 1.82237311e-01,
                     3.23467925e-01, 9.15299528e-02]
    bening_mean = [1.21465238e+01, 1.79147619e+01, 7.80754062e+01, 4.62790196e+02,
                   9.24776471e-02, 8.00846218e-02, 4.60576210e-02, 2.57174062e-02,
                   1.74185994e-01, 6.28673950e-02, 2.84082353e-01, 1.22038011e+00,
                   2.00032129e+00, 2.11351485e+01, 7.19590196e-03, 2.14382465e-02,
                   2.59967356e-02, 9.85765266e-03, 2.05838067e-02, 3.63605126e-03,
                   1.33798011e+01, 2.35150700e+01, 8.70059384e+01, 5.58899440e+02,
                   1.24959496e-01, 1.82672549e-01, 1.66237723e-01, 7.44443445e-02,
                   2.70245938e-01, 7.94420728e-02]

    default_mean_values = [0.06664, 0.04781, 0.1885, 0.05766, 0.2699, 0.7886, 2.058, 23.56, 0.008462, 0.0146,
                           0.02387, 0.01315, 0.0198, 0.0023, 15.11, 19.26, 99.7, 711.2, 0.144, 0.1773, 0.239, 0.1288, 0.2977, 0.07259]

    content = request.get_json()
    # print(content.get('name'))

    values = content.get('Values')
    user_values = [float(i) for i in values]

    ans = closest_list(user_values, maligant_mean, bening_mean)

    input_data = user_values+default_mean_values
    input_data = tuple(input_data)

    # change the input data to a numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    # reshape the numpy array as we are predicting for one datapoint
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    prediction = breast_cancer_model.predict(input_data_reshaped)

    print(prediction)

    type = 'Malignant' if prediction[0] == 0 else 'Benign'
    obj['prediction'] = ans

    return obj

@app.route('/api/pcos', methods=["POST"])
@cross_origin()
def detect_pcos():
    obj = {}
    # input_data = (0.54,14.36,87.46,566.3,0.09779,0.08129,0.06664,0.04781,0.1885,0.05766,0.2699,0.7886,2.058,23.56,0.008462,0.0146,0.02387,0.01315,0.0198,0.0023,15.11,19.26,99.7,711.2,0.144,0.1773,0.239,0.1288,0.2977,0.07259)

    # input_data = (33.000000,63.000000,159.000000,24.900000,15.000000,72.000000,18.000000,10.100000,4.000000,200.000000,7.000000,1.000000,10.000000,294.060000,1.990000,5.020000,12.040000,0.41694439,0.000000,37.000000,0.948718,3.150000,0.800000,33.230000,40.200000,0.300000, 100.000000,0.000000,0.000000,0.000000,0.000000,1.000000,1.000000,0.000000,120.000000,80.000000,6.000000,8.000000,19.000000,17.000000,8.200000)
    middle_means = [11.16003696857671, 2.56007393715342]
    last_means = [664.5492347504621,
                  238.23299260628465,
                  14.601831792975974,
                  6.469918669131238,
                  6.904916820702404,
                  37.99260628465804,
                  33.84103512014787,
                  0.8916266173752311,
                  2.9812809611829945,
                  5.613794824399261,
                  24.321497227356748,
                  49.915874306839186,
                  0.6109445471349352,
                  99.8358595194085,
                  0.37707948243992606,
                  0.2735674676524954,
                  0.3068391866913124,
                  0.45286506469500926,
                  0.4898336414048059,
                  0.5,
                  0.2476894639556377,
                  114.66173752310536,
                  76.9279112754159,
                  6.129390018484289,
                  6.641404805914973,
                  15.0181146025878,
                  15.45170055452865,
                  8.475914972273566]

    content = request.get_json()
    values = content.get('Values')
    values = [float(i) for i in values]
    weight,height = values[1],values[2]
    bmi = weight/(height*height)
    values = values[:3] + [bmi] + values[3:6] + middle_means +values[6:] + last_means
       
    input_data = tuple(values)
    # change the input data to a numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    # reshape the numpy array as we are predicting for one datapoint
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    prediction = pcos_model.predict(input_data_reshaped)

    print(prediction)

    type = 'No' if prediction[0] == 0 else 'Yes'

    obj['prediction'] = type

    return obj

def euclidean_distance(list1, list2):
    distance = math.sqrt(sum([(a - b) ** 2 for a, b in zip(list1, list2)]))
    return distance


def closest_list(input_list, list_a, list_b):
    distance_a = euclidean_distance(input_list, list_a)
    distance_b = euclidean_distance(input_list, list_b)
    if distance_a < distance_b:
        return "Maligant"
    elif distance_a > distance_b:
        return "Benign"
    else:
        return "Both lists are equally close."

# @app.route('/api/brain_tumour')
# def detect_brain_tumour():
#     obj = {}
#     obj['messge'] = "This is route of brain tumour detection"
    
#     return obj


# @app.route('/api/pcos')
# def detect_pcos():
#     obj = {}
#     obj['messge'] = "This is route of pcos detection"
    
#     return obj

if __name__ == '__main__':
    app.run(host='127.0.0.1',port=5001,debug=True)


# venv\Scripts\activate
# python app.py