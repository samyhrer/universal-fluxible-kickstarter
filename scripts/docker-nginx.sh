docker run \
	--name nginx \
	-v $PWD/nginx/config/nginx.conf:/etc/nginx/nginx.conf:ro \
        -d \
        nginx


