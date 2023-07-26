FROM ubuntu:latest
LABEL authors="hiday"

ENTRYPOINT ["top", "-b"]
