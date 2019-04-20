#!/bin/bash

aws cloudformation create-stack \
    --template-body file://$PWD/stack.yml \
    --stack-name stack \
    --region us-east-1\
    --parameters ParameterKey=KeyName,ParameterValue=group6-project.pem\
      ParameterKey=InstanceType,ParameterValue=t2.micro
