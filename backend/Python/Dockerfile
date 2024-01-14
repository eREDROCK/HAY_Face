FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /backend/Python
COPY requirements.txt ./
RUN apt-get update && \
    apt-get install -y libgl1-mesa-glx
RUN python3 -m pip install --upgrade pip setuptools
RUN pip install -r ./requirements.txt
COPY . ./