call awscli --profile
call yarn build
aws s3 sync .\.vuepress\dist s3://mesa-help.bloomberglaw.com-prd-us-east-1-898968741172 --delete --sse
