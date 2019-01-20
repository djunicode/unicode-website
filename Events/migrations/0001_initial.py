# Generated by Django 2.0.9 on 2019-01-20 12:10

from django.db import migrations, models
import django.db.models.deletion
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('technologies', multiselectfield.db.fields.MultiSelectField(choices=[('web', 'Web Development'), ('app', 'App Development')], max_length=7)),
                ('slug', models.SlugField(blank=True)),
                ('date', models.DateTimeField(auto_now=True)),
                ('event_amount', models.PositiveSmallIntegerField(default=0)),
                ('user', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('sap_id', models.CharField(max_length=11)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('contact', models.CharField(max_length=10)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Events.Event')),
            ],
        ),
    ]
