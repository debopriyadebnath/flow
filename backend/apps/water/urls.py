from django.urls import path

from .views import (
    WaterIntakeListCreateView,
    WaterIntakeDetailView,
)

urlpatterns = [
    path(
        "",
        WaterIntakeListCreateView.as_view(),
        name="water-list-create",
    ),
    path(
        "<int:pk>/",
        WaterIntakeDetailView.as_view(),
        name="water-detail",
    ),
]