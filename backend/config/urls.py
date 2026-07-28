from django.contrib import admin
from django.urls import path, include


urlpatterns = [

    path(
        "admin/",
        admin.site.urls
    ),

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

    path(
        "api/journal/",
        include("apps.journal.urls")
    ),
    path(
    "api/dashboard/",
    include("apps.dashboard.urls")
),
path(
    "api/ai/",
    include("apps.ai_assistant.urls")
),
path("api/water/", include("apps.water.urls")),
path(
    "api/nutrition/",
    include("apps.nutrition.urls")
),

]