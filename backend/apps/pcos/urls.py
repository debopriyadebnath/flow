from django.urls import path

from .views import (
    PCOSProfileView,
    PCOSSymptomListCreateView,
    PCOSSymptomDeleteView,
)


urlpatterns = [

    path(
        "",
        PCOSProfileView.as_view(),
        name="pcos-profile"
    ),


    path(
        "symptoms/",
        PCOSSymptomListCreateView.as_view(),
        name="pcos-symptoms"
    ),


    path(
        "symptoms/<int:pk>/",
        PCOSSymptomDeleteView.as_view(),
        name="pcos-symptom-delete"
    ),

]