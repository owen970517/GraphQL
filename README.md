# API(Application Programming Interface) 
- 어플리케이션, 서버, 웹사이트를 만든 사람이 만들어서 내놓은 것으로 이를 사용하여 그것들과 상호작용 할 수 있도록 함
- 개발자들이 해당 사이트와 상호작용 할 수 있도록 도와줌 

# REST API
- 여러 서버들이 서로 소통하는데 많이 쓰는 것 
- GraphQL 과의 차이점은 이 기능들이 어떻게 노출되어있는지에 있음
- 서로 다른 서버간의 통신 또는 IOS 애플리케이션이 서버와 통신할 때 URL 을 사용하여 통신함 
- 문제점 : over-fetching (너무 많은 데이터를 받아옴) , under-fetching(우리가 필요한 것 보다 덜 받는 경우)

# HTTP Request Method 

- GET 메소드는 해당 데이터를 받아옴 
- POST 메소드는 새로운 데이터를 생성 
- PUT 메소드는 해당 데이터를 수정할 수 있음 
- DELETE 메소드는 해당 데이터를 삭제 

# GraphQL 

- rest api 의 단점을 해결하기 위한 방법
- 장점 : 내가 필요한 데이터만 요청하고 받아올 수 있음 