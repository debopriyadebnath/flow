from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("admin/", admin.site.urls),

    # Authentication APIs
    path(
        "api/auth/",
        include("apps.authentication.urls")
    ),

    # Profile APIs
    path(
        "api/profile/",
        include("apps.profiles.urls")
    ),

    # Cycle Tracking APIs
    path(
        "api/cycles/",
        include("apps.cycles.urls")
    ),
]