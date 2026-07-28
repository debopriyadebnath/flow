from django.urls import path

from .views import (
    NutritionEntryListCreateView,
    NutritionEntryDetailView,
)


urlpatterns = [
    path(
        "",
        NutritionEntryListCreateView.as_view(),
        name="nutrition-list-create",
    ),

    path(
        "<int:pk>/",
        NutritionEntryDetailView.as_view(),
        name="nutrition-detail",
    ),
]