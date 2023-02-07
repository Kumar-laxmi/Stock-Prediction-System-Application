[//]: # (Hello welcome to my project 
  This project is already uploaded to my GitHub Account where I have deployed this project
  You can find the project here: https://github.com/Kumar-laxmi/Stock-Prediction-System-Application
)

<img src="./app/static/image/banner.png" alt="STOCK MARKET PREDICTION">

## Introduction
<p>
  Predicting stock prices is a cumbersome task as it does not follow any specific pattern. Changes in the stock prices are purely based on supply and demand during a period of time. In order to learn the specific characteristics of a stock price, we can use algorithm to identify these patterns through machine learning. One of the most well-known networks for series forecasting is LSTM (long short-term memory) which is a Recurrent Neural Network (RNN) that is able to remember information over a long period of time, thus making them extremely useful for predicting stock prices. RNNs are well-suited to time series data and they are able to process the data step-by-step, maintaining an internal state where they cache the information they have seen so far in a summarised version. The successful prediction of a stock's future price could yield a significant profit.
</p>

## Aim
<p> 
  To predict stock prices according to real-time data values fetched from API.
</p>

## Objective
<p>
  The main objective of this project is to develop a web application that can predict stock price based on real-time data.  
</p>

## Project Scope
<p>
  The project has a wide scope, as it is not intended to a particular organization. This project is going to develop generic software, which can be applied by any businesses organization. Moreover it provides facility to its users. Also the software is going to provide a huge amount of summary data. 
</p>
  
## Technology Used:
- #### Languages:
  - ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  - ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  - ![JAVASCRIPT](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  - ![PYTHON](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=darkgreen)
- #### FrameWork:
  - ![BOOTSTRAP](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
  - ![DJANGO](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)

- #### Deployment:
  - Click to see deployement (NOTE: Deployement not working): <a href="https://stock-prediction-system.herokuapp.com/">![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)</a>
- #### Machine-Learning Algorithms:
  - <a href="https://en.wikipedia.org/wiki/Linear_regression">**MULTIPLE LINEAR REGRESSION**</a>

- #### ML/DL:
  - ![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
  - ![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
  - ![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
- #### Database:
  - ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
- #### API used for:
  - Yahoo Finance API 
  - REST API
- #### IDE:
  - ![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
  - ![pyCharm](https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white)
  - ![Jupyter Notebook](https://img.shields.io/badge/Jupyter-F37626.svg?&style=for-the-badge&logo=Jupyter&logoColor=white)
- #### OS used for testing:
  - ![MacOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
  - ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
  - ![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)

- #### Designed using:
  - ![AdobeXD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6)
  - ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

## Prerequisites:
```bash
  Django==3.2.6
  django-heroku==0.3.1
  gunicorn==20.1.0
  matplotlib==3.5.2
  matplotlib-inline==0.1.3
  numpy==1.23.0
  pandas==1.4.1
  pipenv==2022.6.7
  plotly==5.9.0
  requests==2.28.1
  scikit-learn==1.1.1
  scipy==1.8.1
  seaborn==0.11.2
  sklearn==0.0
  virtualenv==20.14.1
  virtualenv-clone==0.5.7
  yfinance==0.1.72
```

## Project Installation:
**STEP 1:** Clone the repository from GitHub.
```bash
  git clone https://github.com/Kumar-laxmi/Stock-Prediction-System-Application.git
```

**STEP 2:** Change the directory to the repository.
```bash
  cd Stock-Prediction-System-Application
```

**STEP 3:** Create a virtual environment
(For Windows)
```bash
  python -m venv virtualenv
```
(For MacOS and Linux)
```bash
  python3 -m venv virtualenv
```

**STEP 4:** Activate the virtual environment.
(For Windows)
```bash
  virtualenv\Scripts\activate
```
(For MacOS and Linux)
```bash
  source virtualenv/bin/activate
```

**STEP 5:** Install the dependencies.
```bash
  pip install -r requirements.txt
```

**STEP 6:** Migrate the Django project.
(For Windows)
```bash
  python manage.py migrate
```
(For MacOS and Linux)
```bash
  python3 manage.py migrate
```

**STEP 7:** Run the application.
(For Windows)
```bash
  python manage.py runserver
```
(For MacOS and Linux)
```bash
  python3 manage.py runserver
```


## Walkthrough Video:


https://user-images.githubusercontent.com/76027425/179440037-bf73c742-c463-434b-a5f9-97b83e4ddb35.mp4


## Output Screen-shots:
The Home page of the application that displays real time data of stock prices.
![image](https://user-images.githubusercontent.com/76027425/179440522-674b6e07-31dc-422f-81e3-0e0c9c74c85a.png)

To Predict stock price we move on to predicition page where we need to enter valid ticker value and number of days and click predict button.
![image](https://user-images.githubusercontent.com/76027425/179440538-a7054ec1-ce3b-44b1-b55e-72bf7e23692c.png)

This page displays the predicted stock price alsong with searched ticker details and also generating unique QR Code to view the predicted result.
![image](https://user-images.githubusercontent.com/76027425/179440583-dcb85f97-d358-42d7-a7b4-661461135efd.png)

The Left Graph is the real time stock price of the searched ticker for past 1day & the Right Graph is the predicted stock price for the number of days searched.
![image](https://user-images.githubusercontent.com/76027425/179440591-06b8b095-d2c4-4df8-93d7-fe389b748470.png)

The Ticker Info page displays the details of all the valid tickers accepted by the application.
![image](https://user-images.githubusercontent.com/76027425/179440611-3552e15a-a66e-464b-a000-cb45b864352c.png)




## Disclaimer
<p>
This software is for educational purposes only. USE THE SOFTWARE AT YOUR OWN RISK. THE AUTHORS AND ALL AFFILIATES ASSUME NO RESPONSIBILITY FOR YOUR TRADING RESULTS. Do not risk money which you are afraid to lose. There might be bugs in the code - this software DOES NOT come with ANY warranty!
</p>
