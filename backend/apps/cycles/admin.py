from django.contrib import admin

from .models import Cycle, CycleEntry


admin.site.register(Cycle)
admin.site.register(CycleEntry)