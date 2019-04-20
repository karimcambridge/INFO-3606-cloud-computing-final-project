#!/bin/bash

aws cloudformation create-stack --template-body file://$PWD/stack.yml --stack-name project --region us-east-1
