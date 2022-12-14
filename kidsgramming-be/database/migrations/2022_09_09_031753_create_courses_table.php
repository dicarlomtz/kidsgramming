<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100)->required();
            $table->text('description')->required();
            $table->boolean('available')->default(true)->nullable();
            $table->boolean('premium')->default(false)->nullable();
            $table->string('cover_image')->nullable();
            $table->foreignId('professor')->required();
            $table->timestamps();
        });

        Schema::table('courses', function (Blueprint $table) {
            $table->foreign('professor')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
};
