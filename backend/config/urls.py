from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("admin/", admin.site.urls),

    path(
        "api/auth/",
        include("apps.authentication.urls")
    ),

    path(
        "api/profile/",
        include("apps.profiles.urls")
    ),

    path(
        "api/cycles/",
        include("apps.cycles.urls")
    ),

    path(
        "api/mood/",
        include("apps.mood.urls")
    ),
    path(
    "api/pcos/",
    include("apps.pcos.urls")
),
]