docker build --platform linux/arm64 -t niradler/doc-home:arm --no-cache --progress=plain .
docker build -t niradler/doc-home:latest --no-cache --progress=plain .
docker push niradler/doc-home:arm
docker push niradler/doc-home:latest