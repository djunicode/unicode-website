from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from newsletter.models import Newsletter, Contact


class NewsletterSubscribe(APIView):
    def post(self, request):
        email = request.data.get('email')
        email_obj = Newsletter.objects.filter(email=email).first()
        if not email_obj:
            email_obj = Newsletter.objects.create(email=email)
            print(email_obj)
            return Response({'detail': f'{email} subscribed'}, status=status.HTTP_201_CREATED)
        return Response({'detail': f'{email} already subscribed'}, status=status.HTTP_403_FORBIDDEN)


class ContactView(APIView):
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')
        contact_obj = Contact.objects.create(name=name, email=email, message=message)
        if contact_obj:
            return Response({'detail': 'We will reach you soon'}, status=status.HTTP_201_CREATED)
        return Response({'detail': 'Something went wrong. Please try again'}, status=status.HTTP_409_CONFLICT)
