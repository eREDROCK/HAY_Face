FROM golang:1.20.5
ENV TZ=Asia/Tokyo

ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64
ENV ROOTPATH=/go/app
ENV GO111MODULE=on

WORKDIR ${ROOTPATH}

RUN apt update \
    && apt clean 
RUN apt-get update \
    && apt-get install -y git curl \
    && rm -rf /var/lib/apt/lists/*
RUN go install github.com/cosmtrek/air@v1.40.0
COPY .air.toml ./
COPY go.mod go.sum./ 
COPY . ./
RUN go mod download

EXPOSE 80
CMD ["air", "-c", ".air.toml"]