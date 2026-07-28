from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import JournalEntry
from .serializers import JournalEntrySerializer


class JournalEntryListCreateView(generics.ListCreateAPIView):

    serializer_class = JournalEntrySerializer
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        return JournalEntry.objects.filter(
            user=self.request.user
        )


    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user
        )



class JournalEntryDetailView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = JournalEntrySerializer
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        return JournalEntry.objects.filter(
            user=self.request.user
        )