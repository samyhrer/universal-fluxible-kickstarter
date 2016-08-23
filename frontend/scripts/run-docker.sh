docker stop frontend
docker rm frontend
docker build -f ./Dockerfile-dev -t frontend . &&
docker run \
        -v $PWD/src:/usr/app/src/src \
        -v $PWD/scripts:/usr/app/src/scripts \
        -v $PWD/config:/usr/app/src/config \
        -i -t \
        --name "frontend"\
        frontend

