from django.db import models

class Motions(models.Model):
    motion = models.CharField(max_length = 200)
    infoSlide = models.CharField(max_length = 200)
    motionTheme = models.CharField(max_length = 200)
    motionDifficulty = models.CharField(max_length = 200)
    #motionOwner = models.ForeignKey('Accounts', on_delete = models.CASCADE, default = None, null = True, blank = True)


class Accounts(models.Model):
    username = models.CharField(max_length = 200)
    password = models.CharField(max_length = 200)
    email_address = models.CharField(max_length = 200, default = "no email")