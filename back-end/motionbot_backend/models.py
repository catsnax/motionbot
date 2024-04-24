from django.db import models

class Motions(models.Model):
    motion = models.CharField(max_length = 200)
    infoSlide = models.CharField(max_length = 200, blank = True, default = None, null = True)
    motionTheme = models.CharField(max_length = 200, default = " ")
    motionOwner = models.ForeignKey('Accounts', null = True, default = None, on_delete = models.CASCADE)


class Accounts(models.Model):
    username = models.CharField(max_length = 200)
    password = models.CharField(max_length = 200)