from django.urls import path

from .views import (
    CycleListCreateView,
    CycleDetailView,
    CycleEntryCreateView,
)


urlpatterns = [
    path(
        "",
        CycleListCreateView.as_view(),
        name="cycle-list-create",
    ),

    path(
        "<int:pk>/",
        CycleDetailView.as_view(),
        name="cycle-detail",
    ),

    path(
        "<int:cycle_id>/entries/",
        CycleEntryCreateView.as_view(),
        name="cycle-entry-create",
    ),
]