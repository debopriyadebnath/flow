from django.urls import path

from .views import (
    MoodEntryListCreateView,
    MoodEntryDetailView,
)


urlpatterns = [

    path(
        "",
        MoodEntryListCreateView.as_view(),
        name="mood-list-create"
    ),

    path(
        "<int:pk>/",
        MoodEntryDetailView.as_view(),
        name="mood-detail"
    ),

]